import {trigger, transition, animate, style, state, AnimationTriggerMetadata} from '@angular/animations';
import {OutAnimationsConfig} from '../inOutAnimationsConfig';

/**
 * Creates configured FlyOutAnimation
 * @param {OutAnimationsConfig} configuration Configuration object used for configuring animation
 * @returns AnimationEntryMetadata
 */
export function flyOutAnimationConfig(configuration: OutAnimationsConfig): AnimationTriggerMetadata
{
    return trigger('flyOut',
    [
        transition('* => void',
        [
            animate(configuration.outTiming, style(
            {
                opacity: 0,
                transform: 'translateX(20%)'
            }))
        ])
    ]);
};

/**
 * Default FlyOutAnimation
 */
export const FlyOutAnimation = flyOutAnimationConfig(
{
    outTiming: '400ms ease-in'
});
