import {animation, style, animate, group, AnimationReferenceMetadata} from '@angular/animations';

import {CssPosition, CssDisplay, CssOverflow} from "../../misc/types";

/**
 * Type representing slide out params
 */
export type SlideOutParams = {heightDuration?: string, opacityDuration?: string, fromHeight?: string, toHeight?: string, fromOpacity?: number|'*', toOpacity?: number|'*', position?: CssPosition, display?: CssDisplay, overflow?: CssOverflow};

/**
 * Slide out animation
 */
export const slideOutAnimation: AnimationReferenceMetadata = animation(
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
], {params: <SlideOutParams>{heightDuration: '300ms 100ms ease-in', opacityDuration: '400ms ease-in', fromHeight: '*', toHeight: '0', fromOpacity: '*', toOpacity: 0, position: 'static', display: 'block', overflow: 'hidden'}});