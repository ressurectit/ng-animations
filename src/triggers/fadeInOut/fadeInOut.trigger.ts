import {trigger, transition, useAnimation, AnimationTriggerMetadata} from '@angular/animations';

import {FadeInParams, fadeInAnimation} from "../../animations/fadeIn/fadeIn.animation";
import {FadeOutParams, fadeOutAnimation} from "../../animations/fadeOut/fadeOut.animation";

/**
 * Creates fadeInOut trigger for fadeInOut animation
 * @param params - Parameters 
 * @returns AnimationTriggerMetadata
 */
export function fadeInOutTriggerFactory(params: {inParams: FadeInParams, outParams: FadeOutParams}): AnimationTriggerMetadata
{
    return trigger('fadeInOut',
    [
        transition(':enter', 
        [
            useAnimation(fadeInAnimation, {params: params.inParams})
        ]),
        transition(':leave', 
        [
            useAnimation(fadeOutAnimation, {params: params.outParams})
        ])
    ]);
};

/**
 * Default fadeInOut trigger
 */
export const fadeInOutTrigger = fadeInOutTriggerFactory({inParams: {}, outParams: {}});
