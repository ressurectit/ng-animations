import {trigger, transition, animate, style, state, AnimationTriggerMetadata} from '@angular/animations';
import {InOutAnimationsConfig} from '../inOutAnimationsConfig';
import {VISIBLE} from '../stateNames';

/**
 * Creates configured VisibleFadeInOutAnimation
 * @param {InOutAnimationsConfig} configuration Configuration object used for configuring animation
 * @returns AnimationTriggerMetadata
 */
export function visibleFadeInOutAnimationConfig(configuration: InOutAnimationsConfig): AnimationTriggerMetadata
{
    return trigger('visibleFadeInOut',
    [
        state('*', style(
        {
            opacity: 0,
        })),
        state(VISIBLE, style(
        {
            opacity: '*'
        })),
        transition(`* => visible`, animate(configuration.inTiming)),
        transition(`visible => *`, animate(configuration.outTiming))
    ]);
};

/**
 * Default VisibleFadeInOutAnimation
 */
export const VisibleFadeInOutAnimation = visibleFadeInOutAnimationConfig(
{
    inTiming: '360ms ease-in',
    outTiming: '360ms ease-out'
});
