import {animation, style, animate, keyframes, AnimationReferenceMetadata} from '@angular/animations';

import {CssPosition, CssDisplay} from "../../misc/types";

/**
 * Type representing slide in params
 */
export type SlideInParams = {duration?: string, fromHeight?: string, toHeight?: string, fromOpacity?: number|'*', toOpacity?: number|'*', position?: CssPosition, display?: CssDisplay};

/**
 * Slide in animation
 */
export const slideInAnimation: AnimationReferenceMetadata = animation(
[
    style(
    {
        display: '{{display}}',
        position: '{{position}}',
        opacity: '{{fromOpacity}}'
    }),
    animate('{{duration}}', keyframes(
    [
        style(
        {
            height: '{{fromHeight}}',
            offset: 0
        }),
        style({opacity: '{{fromOpacity}}', offset: 0.25}),
        style(
        {
            height: "{{toHeight}}",
            offset: 0.4
        }),
        style({opacity: '{{toOpacity}}', offset: 1})
    ]))
], {params: <SlideInParams>{duration: '400ms ease-in', fromHeight: '0', toHeight: '*', fromOpacity: 0, toOpacity: '*', position: 'absolute', display: 'block'}});