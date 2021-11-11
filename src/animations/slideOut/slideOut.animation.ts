import {animation, style, animate, group, AnimationReferenceMetadata} from '@angular/animations';

/**
 * Type representing slide out params
 */
export type SlideOutParams = {heightDuration?: string, opacityDuration?: string, toOpacity?: number};

/**
 * Slide out animation
 */
export const slideOutAnimation: AnimationReferenceMetadata = animation(
[
    style(
    {
        overflow: 'hidden'
    }),
    group(
    [
        animate('{{opacityDuration}}', style(
        {
            opacity: '{{toOpacity}}'
        })),
        animate('{{heightDuration}}', style(
        {
            height: 0,
            marginTop: 0,
            marginBottom: 0,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            paddingTop: 0,
            paddingBottom: 0
        }))
    ])
], {params: <SlideOutParams>{heightDuration: '300ms 100ms ease-out', opacityDuration: '400ms ease-out', toOpacity: 0}});
