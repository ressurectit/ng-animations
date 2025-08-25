import {Component, ChangeDetectionStrategy, model, ModelSignal} from '@angular/core';

/**
 * Animated up down caret icon component
 */
@Component(
{
    selector: '.up-down-caret-icon',
    templateUrl: 'upDownCaretIcon.component.html',
    styleUrl: 'upDownCaretIcon.component.scss',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpDownCaretIconComponent
{
    //######################### public properties - models #########################

    /**
     * Indication whether is caret closed or not
     */
    public closed: ModelSignal<boolean> = model(true);
}
