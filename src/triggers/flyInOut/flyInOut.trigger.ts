import {trigger, transition, useAnimation, AnimationTriggerMetadata} from '@angular/animations';

import {flyOutAnimation, FlyOutParams} from "../../animations/flyOut/flyOut.animation";
import {FlyInParams, flyInAnimation} from "../../animations/flyIn/flyIn.animation";

/**
 * Creates flyInOut trigger for flyInOut animation
 * @param params - Parameters 
 * @returns AnimationTriggerMetadata
 */
export function flyInOutTriggerFactory(params: {inParams: FlyInParams, outParams: FlyOutParams}): AnimationTriggerMetadata
{
    return trigger('flyInOut',
    [
        transition(':enter', 
        [
            useAnimation(flyInAnimation, {params: params.inParams})
        ]),
        transition(':leave', 
        [
            useAnimation(flyOutAnimation, {params: params.outParams})
        ])
    ]);
};

/**
 * Default flyInOut trigger
 */
export const flyInOutTrigger = flyInOutTriggerFactory({inParams: {}, outParams: {}});
