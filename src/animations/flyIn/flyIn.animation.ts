import {animation, style, animate, AnimationReferenceMetadata} from '@angular/animations';

import {CssPosition, CssDisplay} from "../../misc/types";

/**
 * Type representing fly in params
 */
export type FlyInParams = {fromOpacity?: number|'*', toOpacity?: number|'*', position?: CssPosition, display?: CssDisplay, fromX?: string, duration?: string};

/**
 * Fly in animation
 */
export const flyInAnimation: AnimationReferenceMetadata = animation(
[
    style(
    {
        opacity: '{{fromOpacity}}',
        transform: 'translateX({{fromX}})',
        display: '{{display}}',
        position: '{{position}}'
    }),
    animate('{{duration}}', style(
    {
        opacity: '{{toOpacity}}',
        transform: 'translateX(0)'
    }))
], {params: <FlyInParams>{fromOpacity: 0, toOpacity: 1, position: 'absolute', display: 'block', fromX: '25%', duration: '400ms ease-in'}});