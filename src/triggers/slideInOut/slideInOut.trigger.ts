import {trigger, transition, useAnimation, AnimationTriggerMetadata} from '@angular/animations';

import {SlideInParams, slideInAnimation} from '../../animations/slideIn/slideIn.animation';
import {SlideOutParams, slideOutAnimation} from '../../animations/slideOut/slideOut.animation';

/**
 * Creates slideInOut trigger for slideInOut animation
 * @param params - Parameters 
 */
export function slideInOutTriggerFactory(params: {inParams: SlideInParams, outParams: SlideOutParams}): AnimationTriggerMetadata
{
    return trigger('slideInOut',
    [
        transition(':enter', 
        [
            useAnimation(slideInAnimation, {params: params.inParams})
        ]),
        transition(':leave', 
        [
            useAnimation(slideOutAnimation, {params: params.outParams})
        ])
    ]);
}

/**
 * Default slideInOut trigger
 */
export const slideInOutTrigger = slideInOutTriggerFactory({inParams: {}, outParams: {}});