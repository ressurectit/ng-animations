import {animation, style, animate, AnimationReferenceMetadata} from '@angular/animations';

import {CssPosition, CssDisplay} from "../../misc/types";

/**
 * Type representing fly out params
 */
export type FlyOutParams = {fromOpacity?: number, toOpacity?: number, position?: CssPosition, display?: CssDisplay, toX?: string, duration?: string};

/**
 * Fly out animation
 */
export const flyOutAnimation = animation(
[
    style(
    {
        opacity: '{{fromOpacity}}',
        display: '{{display}}',
        position: '{{position}}'
    }),
    animate('{{duration}}', style(
    {
        opacity: '{{toOpacity}}',
        transform: 'translateX({{toX}})'
    }))
], {params: <FlyOutParams>{fromOpacity: 1, toOpacity: 0, position: 'absolute', display: 'block', toX: '-25%', duration: '400ms ease-out'}});