import {trigger, transition, useAnimation, AnimationTriggerMetadata} from '@angular/animations';

import {flyOutAnimation, FlyOutParams} from "../../animations/flyOut/flyOut.animation";
import {FlyInParams, flyInAnimation} from "../../animations/flyIn/flyIn.animation";

/**
 * Creates visibleFlyInOut trigger for flyInOut animation
 * @param params Parameters 
 * @returns AnimationTriggerMetadata
 */
export function visibleFlyInOutTriggerFactory(params: {inParams: FlyInParams, outParams: FlyOutParams}): AnimationTriggerMetadata
{
    return trigger('visibleFlyInOut',
    [
        transition('* => visible', 
        [
            useAnimation(flyInAnimation, {params: params.inParams})
        ]),
        transition('visible => *', 
        [
            useAnimation(flyOutAnimation, {params: params.outParams})
        ])
    ]);
};

/**
 * Default visibleFlyInOut trigger
 */
export const visibleFlyInOutTrigger = visibleFlyInOutTriggerFactory({inParams: {}, outParams: {}});