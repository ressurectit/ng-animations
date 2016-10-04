import {trigger, transition, animate, style, state, AnimationEntryMetadata} from '@angular/core';
import {InAnimationsConfig} from '../inOutAnimationsConfig';

/**
 * Creates configured FlyInAnimation
 * @param {InAnimationsConfig} configuration Configuration object used for configuring animation
 * @returns AnimationEntryMetadata
 */
export function flyInAnimationConfig(configuration: InAnimationsConfig): AnimationEntryMetadata
{
    return trigger('flyIn',
    [
        transition('void => *',
        [
            style(
            {
                opacity: 0,
                transform: "translateX(-20%)"
            }),
            animate(configuration.inTiming, style(
            {
                opacity: 1,
                transform: 'translateX(0)'
            }))
        ])
    ]);
};

/**
 * Default FlyInAnimation
 */
export const FlyInAnimation = flyInAnimationConfig(
{
    inTiming: '400ms ease-in'
});
