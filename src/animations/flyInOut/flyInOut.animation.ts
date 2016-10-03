import {trigger, transition, animate, style, state, AnimationEntryMetadata} from '@angular/core';
import {InOutAnimationsConfig} from '../inOutAnimationsConfig';

/**
 * Creates configured FlyInOutAnimation
 * @param {InOutAnimationsConfig} configuration Configuration object used for configuring animation
 * @returns AnimationEntryMetadata
 */
export function flyInOutAnimationConfig(configuration: InOutAnimationsConfig): AnimationEntryMetadata
{
    return trigger('flyInOut',
    [
        state('*', style(
        {
            opacity: 1,
            transform: 'translateX(0)'
        })),
        transition('void => *', 
        [
            style(
            {
                opacity: 0,
                transform: 'translateX(-60%)'
            }),
            animate(configuration.inTiming)
        ]),
        transition('* => void', 
        [
            animate(configuration.outTiming, style(
            {
                opacity: 0,
                transform: 'translateY(60%)'
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
    outTiming: '500ms ease-out'
});
