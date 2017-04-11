import {trigger, transition, animate, style, state, AnimationTriggerMetadata} from '@angular/animations';
import {InOutAnimationsConfig} from '../inOutAnimationsConfig';

/**
 * Creates configured FlyInOutAnimation
 * @param {InOutAnimationsConfig} configuration Configuration object used for configuring animation
 * @returns AnimationTriggerMetadata
 */
export function flyInOutAnimationConfig(configuration: InOutAnimationsConfig): AnimationTriggerMetadata
{
    return trigger('flyInOut',
    [
        transition('void => *', 
        [
            style(
            {
                opacity: 0,
                transform: 'translateX(20%)'
            }),
            animate(configuration.inTiming, style(
            {
                opacity: 1,
                transform: 'translateX(0)'
            }))
        ]),
        transition('* => void', 
        [
            animate(configuration.outTiming, style(
            {
                opacity: 0,
                transform: 'translateX(-20%)'
            }))
        ])
    ]);
};

/**
 * Default FlyInOutAnimation
 */
export const FlyInOutAnimation = flyInOutAnimationConfig(
{
    inTiming: '400ms ease-in',
    outTiming: '400ms ease-out'
});
