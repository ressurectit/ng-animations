import {trigger, transition, animate, style, state, AnimationTriggerMetadata} from '@angular/animations';
import {InAnimationsConfig} from '../inOutAnimationsConfig';
import {VISIBLE} from '../stateNames';

/**
 * Creates configured VisibleFadeInAnimation
 * @param {InAnimationsConfig} configuration Configuration object used for configuring animation
 * @returns AnimationTriggerMetadata
 */
export function visibleFadeInAnimationConfig(configuration: InAnimationsConfig): AnimationTriggerMetadata
{
    return trigger('visibleFadeIn',
    [
        state('*', style(
        {
            opacity: 0,
        })),
        state(VISIBLE, style(
        {
            opacity: '*'
        })),
        transition(`* => visible`, animate(configuration.inTiming))
    ]);
};

/**
 * Default VisibleFadeInAnimation
 */
export const VisibleFadeInAnimation = visibleFadeInAnimationConfig(
{
    inTiming: '380ms 0 ease-in'
});
