import {trigger, transition, useAnimation, AnimationTriggerMetadata} from '@angular/animations';

import {flyInAnimation, FlyInParams} from "../../animations/flyIn/flyIn.animation";

/**
 * Creates flyIn trigger for flyIn animation
 * @param params - Parameters 
 * @returns AnimationTriggerMetadata
 */
export function flyInTriggerFactory(params: FlyInParams): AnimationTriggerMetadata
{
    return trigger('flyIn',
    [
        transition(':enter',
        [
            useAnimation(flyInAnimation, {params})
        ])
    ]);
};

/**
 * Default flyIn trigger
 */
export const flyInTrigger: AnimationTriggerMetadata = flyInTriggerFactory({});
