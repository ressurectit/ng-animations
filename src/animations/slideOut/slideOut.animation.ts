import {animation, style, animate, keyframes, AnimationReferenceMetadata} from '@angular/animations';

import {CssPosition, CssDisplay} from "../../misc/types";

/**
 * Type representing slide out params
 */
export type SlideOutParams = {duration?: string, fromHeight?: string, toHeight?: string, fromOpacity?: number|'*', toOpacity?: number|'*', position?: CssPosition, display?: CssDisplay};

/**
 * Slide out animation
 */
export const slideOutAnimation: AnimationReferenceMetadata = animation(
[
    style(
    {
        display: '{{display}}',
        position: '{{position}}'
    }),
    animate('{{duration}}', keyframes(
    [
        style({opacity: '{{fromOpacity}}', offset: 0}),
        style(
        {
            height: '{{fromHeight}}',
            offset: 0.6
        }),
        style({opacity: '{{toOpacity}}', offset: 0.75}),
        style(
        {
            height: '{{toHeight}}',
            offset: 1
        })
    ]))
], {params: <SlideOutParams>{duration: '400ms ease-out', fromHeight: '*', toHeight: '0', fromOpacity: '*', toOpacity: 0, position: 'absolute', display: 'block'}});