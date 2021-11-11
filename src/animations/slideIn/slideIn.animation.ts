import {animation, style, animate, group, AnimationReferenceMetadata} from '@angular/animations';

/**
 * Type representing slide in params
 */
export type SlideInParams = {heightDuration?: string, opacityDuration?: string, fromOpacity?: number};

/**
 * Slide in animation
 */
export const slideInAnimation: AnimationReferenceMetadata = animation(
[
    style(
    {
        overflow: 'hidden',
        height: 0,
        marginTop: 0,
        marginBottom: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        paddingTop: 0,
        paddingBottom: 0,
        opacity: '{{fromOpacity}}'
    }),
    group(
    [
        animate('{{opacityDuration}}', style(
        {
            opacity: '*'
        })),
        animate('{{heightDuration}}', style(
        {
            height: '*',
            marginTop: '*',
            marginBottom: '*',
            borderTopWidth: '*',
            borderBottomWidth: '*',
            paddingTop: '*',
            paddingBottom: '*'
        }))
    ])
], {params: <SlideInParams>{heightDuration: '400ms ease-in', opacityDuration: '300ms 100ms ease-in', fromOpacity: 0}});
