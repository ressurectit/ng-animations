import {trigger, transition, useAnimation, AnimationTriggerMetadata} from '@angular/animations';

import {flyOutAnimation, FlyOutParams} from "../../animations/flyOut/flyOut.animation";

/**
 * Creates flyOut trigger for flyOut animation
 * @param params - Parameters 
 * @returns AnimationTriggerMetadata
 */
export function flyOutTriggerFactory(params: FlyOutParams): AnimationTriggerMetadata
{
    return trigger('flyOut',
    [
        transition(':leave',
        [
            useAnimation(flyOutAnimation, {params})
        ])
    ]);
};

/**
 * Default flyOut trigger
 */
export const flyOutTrigger: AnimationTriggerMetadata = flyOutTriggerFactory({});