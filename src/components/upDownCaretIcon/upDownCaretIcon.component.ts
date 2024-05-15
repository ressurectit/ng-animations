import {Component, ChangeDetectionStrategy, Input, EventEmitter, Output} from '@angular/core';

//TODO: updated to model()

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
    //######################### public properties - inputs #########################

    /**
     * Indication whether is caret closed or not
     */
    @Input()
    public closed: boolean = true;

    //######################### public properties - outputs #########################

    /**
     * Occurs when closed changes
     */
    @Output()
    public closedChange: EventEmitter<boolean> = new EventEmitter<boolean>();
}