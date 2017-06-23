import {animation, style, animate, AnimationReferenceMetadata} from '@angular/animations';

/**
 * Type representing fade in params
 */
export type FadeInParams = {fromOpacity?: number|'*', toOpacity?: number|'*', duration?: string};

/**
 * Fade in animation
 */
export const fadeInAnimation: AnimationReferenceMetadata = animation(
[
    style(
    {
        opacity: '{{fromOpacity}}'
    }),
    animate('{{duration}}', style(
    {
        opacity: '{{toOpacity}}'
    }))
], {params: <FadeInParams>{fromOpacity: 0, toOpacity: 1, duration: '400ms ease-in'}});