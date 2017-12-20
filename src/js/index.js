import '../sass/style.sass';

export default (function(){
    const rangeSliderTemplate = `
        <div class="rng-sldr-quantity rng-sldr-quantity-first">
            <div class="line"></div>
            <div class="rng-sldr-quantity-lever"></div>
        </div>
        <div class="rng-sldr-quantity-line"></div>
        <div class="rng-sldr-quantity rng-sldr-quantity-second">
            <div class="line"></div>
            <div class="rng-sldr-quantity-lever"></div>                    
        </div>
    `;

    function setFirstLeverWidth(value, min, range, sw, lw, limit, target) {
        if (limit) {
            if (value > limit) {
                value = limit;
                target.value = limit;
            }
            if (value < min) {
                value = min;
                target.value = min;
            }
        }
        return (value - min) / range * (sw - lw - lw) + lw;
    }

    function setSecondLeverWidth(value, min, range, sw, lw, limit, target) {
        if (limit) {
            const max = range + min;
            if (value > max) {
                value = max;
                target.value = max;
            }
            if (value < limit) {
                value = limit;
                target.value = limit;
            }
        }
        return sw - lw - (value - min) * (sw - lw - lw) / range;
    }

    function setValue(element, value){
        if(element.tagName === "INPUT"){
            element.value = value;
        } else {
            element.innerText = value;
        }
    }

    function getValue(element){
        if (element.tagName === "INPUT") return element.value;
        return element.textContent;
    }

    function mouseMoveFirstHandler(start, parentWidth, leverWidth, parent, quantitySecondWidth, rangeSliderWidth, range, min, firstOutput) {
        return function (event) {
            const movementWidth = event.clientX - start;
            const newParentWidth = parentWidth + movementWidth;

            if (newParentWidth >= leverWidth) {
                if (newParentWidth + quantitySecondWidth <= rangeSliderWidth) {
                    parent.style.width = newParentWidth + 'px';
                } else {
                    parent.style.width = rangeSliderWidth - quantitySecondWidth + 'px';
                }
            } else {
                parent.style.width = leverWidth + 'px';
            }

            const q = Math.round((parseFloat(parent.style.width) - leverWidth) / (rangeSliderWidth - leverWidth - leverWidth) * range) + min;

            setValue(firstOutput, q);
        }
    }

    function mouseMoveSecondHandler(start, parentWidth, leverWidth, parent, quantityFirstWidth, rangeSliderWidth, range, min, secondOutput) {
        return function (event) {
            const movementWidth = event.clientX - start;
            const newParentWidth = parentWidth - movementWidth;

            if (newParentWidth >= leverWidth) {
                if (newParentWidth + quantityFirstWidth <= rangeSliderWidth) {
                    parent.style.width = newParentWidth + 'px';
                } else {
                    parent.style.width = rangeSliderWidth - quantityFirstWidth + 'px';
                }
            } else {
                parent.style.width = leverWidth + 'px';
            }

            const q = Math.round((rangeSliderWidth - parseFloat(parent.style.width) - leverWidth) / (rangeSliderWidth - leverWidth - leverWidth) * range) + min;

            setValue(secondOutput, q);
        }
    }

    function touchMoveFirstHandler(start, parentWidth, leverWidth, parent, quantitySecondWidth, rangeSliderWidth, range, min, firstOutput) {
        return function (event) {
            const movementWidth = Math.floor(event.touches[0].clientX - start);
            const newParentWidth = parentWidth + movementWidth;

            if (newParentWidth >= leverWidth) {
                if (newParentWidth + quantitySecondWidth <= rangeSliderWidth) {
                    parent.style.width = newParentWidth + 'px';
                } else {
                    parent.style.width = rangeSliderWidth - quantitySecondWidth + 'px';
                }
            } else {
                parent.style.width = leverWidth + 'px';
            }

            const q = Math.round((parseFloat(parent.style.width) - leverWidth) / (rangeSliderWidth - leverWidth - leverWidth) * range) + min;

            setValue(firstOutput, q);
        }
    }

    function touchMoveSecondHandler(start, parentWidth, leverWidth, parent, quantityFirstWidth, rangeSliderWidth, range, min, secondOutput) {
        return function (event) {
            const movementWidth = Math.floor(event.touches[0].clientX - start);
            const newParentWidth = parentWidth - movementWidth;

            if (newParentWidth >= leverWidth) {
                if (newParentWidth + quantityFirstWidth <= rangeSliderWidth) {
                    parent.style.width = newParentWidth + 'px';
                } else {
                    parent.style.width = rangeSliderWidth - quantityFirstWidth + 'px';
                }
            } else {
                parent.style.width = leverWidth + 'px';
            }

            const q = Math.round((rangeSliderWidth - parseFloat(parent.style.width) - leverWidth) / (rangeSliderWidth - leverWidth - leverWidth) * range) + min;

            setValue(secondOutput, q);
        }
    }

    function create(rsClass, { min = 0, max, start, end }) {
        const rangeSlider = document.querySelector(`.${rsClass}`);
        rangeSlider.innerHTML = rangeSliderTemplate;
        const firstOutput = document.querySelector(`.${rsClass}-start`);
        const secondOutput = document.querySelector(`.${rsClass}-end`);
        const range = max - min;
        const rngSldrQuantityFirst = rangeSlider.querySelector('.rng-sldr-quantity-first');
        const rngSldrQuantitySecond = rangeSlider.querySelector('.rng-sldr-quantity-second');
        const rngSldrQuantityLeverFirst = rngSldrQuantityFirst.querySelector('.rng-sldr-quantity-lever');
        const rngSldrQuantityLeverSecond = rngSldrQuantitySecond.querySelector('.rng-sldr-quantity-lever');
        const leverWidth = parseInt(getComputedStyle(rngSldrQuantityLeverFirst).width);
        let rangeSliderWidth = parseInt(getComputedStyle(rangeSlider).width);

        setValue(firstOutput, start || min);
        setValue(secondOutput, end || max);
        rngSldrQuantityFirst.style.width = start ? setFirstLeverWidth(start, min, range, rangeSliderWidth, leverWidth) + 'px' : leverWidth + 'px';
        rngSldrQuantitySecond.style.width = end ? setSecondLeverWidth(end, min, range, rangeSliderWidth, leverWidth) + 'px' : leverWidth + 'px';

        if (firstOutput.tagName === "INPUT"){
            firstOutput.addEventListener('change', function (event) {
                rngSldrQuantityFirst.style.width = setFirstLeverWidth(event.target.value, min, range, rangeSliderWidth, leverWidth, parseInt(secondOutput.value), event.target) + 'px';
            });
        }

        if(secondOutput.tagName === "INPUT") {
            secondOutput.addEventListener('change', function (event) {
                rngSldrQuantitySecond.style.width = setSecondLeverWidth(event.target.value, min, range, rangeSliderWidth, leverWidth, parseInt(firstOutput.value), event.target) + 'px';
            });
        }

        window.addEventListener('resize', function (event) {
            rangeSliderWidth = parseInt(getComputedStyle(rangeSlider).width);
            rngSldrQuantityFirst.style.width = setFirstLeverWidth(getValue(firstOutput), min, range, rangeSliderWidth, leverWidth) + 'px';
            rngSldrQuantitySecond.style.width = setSecondLeverWidth(getValue(secondOutput), min, range, rangeSliderWidth, leverWidth) + 'px';
        });

        rngSldrQuantityLeverFirst.addEventListener('mousedown', function (event) {
            event.preventDefault();
            const parent = this.parentElement;
            const start = event.clientX;
            const parentWidth = parseFloat(parent.style.width) || 0;
            const quantitySecondWidth = parseFloat(rngSldrQuantitySecond.style.width);
            const handler = mouseMoveFirstHandler(start, parentWidth, leverWidth, parent, quantitySecondWidth, rangeSliderWidth, range, min, firstOutput);
            document.addEventListener('mousemove', handler);
            document.addEventListener('mouseup', function (event) {
                this.removeEventListener('mousemove', handler);
            });
        });

        rngSldrQuantityLeverSecond.addEventListener('mousedown', function (event) {
            event.preventDefault();
            const parent = this.parentElement;
            const start = event.clientX;
            const parentWidth = parseFloat(parent.style.width) || 0;
            const quantityFirstWidth = parseFloat(rngSldrQuantityFirst.style.width);
            const handler = mouseMoveSecondHandler(start, parentWidth, leverWidth, parent, quantityFirstWidth, rangeSliderWidth, range, min, secondOutput);
            document.addEventListener('mousemove', handler);
            document.addEventListener('mouseup', function (event) {
                this.removeEventListener('mousemove', handler);
            });
        });

        rngSldrQuantityLeverFirst.addEventListener('touchstart', function (event) {
            event.preventDefault();
            const parent = this.parentElement;
            const start = event.touches[0].clientX;
            const parentWidth = parseFloat(parent.style.width) || 0;
            const quantitySecondWidth = parseFloat(rngSldrQuantitySecond.style.width);
            const handler = touchMoveFirstHandler(start, parentWidth, leverWidth, parent, quantitySecondWidth, rangeSliderWidth, range, min, firstOutput);
            document.addEventListener('touchmove', handler);
            document.addEventListener('touchend', function (event) {
                this.removeEventListener('touchmove', handler);
            });
        });

        rngSldrQuantityLeverSecond.addEventListener('touchstart', function (event) {
            event.preventDefault();
            const parent = this.parentElement;
            const start = event.touches[0].clientX;
            const parentWidth = parseFloat(parent.style.width) || 0;
            const quantityFirstWidth = parseFloat(rngSldrQuantityFirst.style.width);
            const handler = touchMoveSecondHandler(start, parentWidth, leverWidth, parent, quantityFirstWidth, rangeSliderWidth, range, min, secondOutput);
            document.addEventListener('touchmove', handler);
            document.addEventListener('touchend', function (event) {
                this.removeEventListener('touchmove', handler);
            });
        });
    }

    return create;
})();