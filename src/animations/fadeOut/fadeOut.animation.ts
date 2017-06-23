import {animation, style, animate, AnimationReferenceMetadata} from '@angular/animations';

/**
 * Type representing fade out params
 */
export type FadeOutParams = {fromOpacity?: number|'*', toOpacity?: number|'*', duration?: string};

/**
 * Fade out animation
 */
export const fadeOutAnimation: AnimationReferenceMetadata = animation(
[
    style(
    {
        opacity: '{{fromOpacity}}'
    }),
    animate('{{duration}}', style(
    {
        opacity: '{{toOpacity}}'
    }))
], {params: <FadeOutParams>{fromOpacity: 1, toOpacity: 0, duration: '400ms ease-out'}});