import {trigger, transition, useAnimation} from '@angular/animations';

import {animateChildrenAnimation} from '../../animations/animateChildren/animateChildren.animation';

/**
 * Animate children trigger
 */
export const animateChildrenTrigger = trigger('animateChildren',
[
    transition(':enter, :leave',
    [
        useAnimation(animateChildrenAnimation)
    ])
]);
