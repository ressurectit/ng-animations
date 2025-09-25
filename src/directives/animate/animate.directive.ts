import {Directive, input, InputSignal} from '@angular/core';

/**
 * Directive used for enabling enter/leave animations, best use for dynamically created components
 */
@Directive(
{
    selector: '[animate]',
    host:
    {
        '[animate.enter]': 'enterAnimation()',
        '[animate.leave]': 'leaveAnimation()',
    },
})
export class AnimateDirective
{
    //######################### public properties - inputs #########################

    /**
     * Name or names of animations that are used for entering element
     */
    public enterAnimation: InputSignal<string|string[]> = input<string|string[]>([]);

    /**
     * Name or names of animations that are used for leaving element
     */
    public leaveAnimation: InputSignal<string|string[]> = input<string|string[]>([]);
}
