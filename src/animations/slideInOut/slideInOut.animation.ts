import {trigger, transition, animate, keyframes, style, AnimationTriggerMetadata} from '@angular/animations';
import {InOutAnimationsConfig} from '../inOutAnimationsConfig';

/**
 * Creates configured SlideInOutAnimation
 * @param  {InOutAnimationsConfig} configuration Configuration object used for configuring animation
 * @returns AnimationEntryMetadata
 */
export function slideInOutAnimationConfig(configuration: InOutAnimationsConfig): AnimationTriggerMetadata
{
    return trigger('slideInOut',
    [
        transition('void => *',
        [
            animate(configuration.inTiming,
                    keyframes(
                    [
                        style(
                        {
                            opacity: 0,
                            height: 0,
                            offset: 0
                        }),
                        style({opacity: '0', offset: 0.25}),
                        style(
                        {
                            height: "*",
                            offset: 0.4
                        }),
                        style({opacity: '*', offset: 1})
                    ]))
        ]),
        transition('* => void',
        [
            animate(configuration.outTiming,
                    keyframes(
                    [
                        style({opacity: '*', offset: 0}),
                        style(
                        {
                            height: "*",
                            offset: 0.6
                        }),
                        style({opacity: '0', offset: 0.75}),
                        style(
                        {
                            opacity: 0,
                            height: 0,
                            offset: 1
                        })
                    ]))
        ])
    ]);
};

/**
 * Default SlideInOutAnimation
 */
export const SlideInOutAnimation = slideInOutAnimationConfig(
{
    inTiming: '0.4s ease-in',
    outTiming: '0.4s ease-out'
});
