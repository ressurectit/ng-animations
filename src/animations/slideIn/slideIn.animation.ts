import {animation, style, animate, group, AnimationReferenceMetadata} from '@angular/animations';

import {CssPosition, CssDisplay, CssOverflow} from "../../misc/types";

/**
 * Type representing slide in params
 */
export type SlideInParams = {heightDuration?: string, opacityDuration?: string, fromHeight?: string, toHeight?: string, fromOpacity?: number|'*', toOpacity?: number|'*', position?: CssPosition, display?: CssDisplay, overflow?: CssOverflow};

/**
 * Slide in animation
 */
export const slideInAnimation: AnimationReferenceMetadata = animation(
[
    style(
    {
        display: '{{display}}',
        position: '{{position}}',
        opacity: '{{fromOpacity}}',
        height: '{{fromHeight}}',
        overflow: '{{overflow}}'
    }),
    group(
    [
        animate('{{heightDuration}}', style({height: '{{toHeight}}'})),
        animate('{{opacityDuration}}', style({opacity: '{{toOpacity}}'}))
    ])
], {params: <SlideInParams>{heightDuration: '400ms ease-in', opacityDuration: '300ms 100ms ease-in', fromHeight: '0', toHeight: '*', fromOpacity: 0, toOpacity: '*', position: 'static', display: 'block', overflow: 'hidden'}});