import {Component, ChangeDetectionStrategy, OnDestroy, HostListener, ChangeDetectorRef} from '@angular/core';
import {isPresent} from '@jscrpt/common';

/**
 * Animated double right icon component
 */
@Component(
{
    selector: '.double-right-icon',
    templateUrl: 'doubleRightIcon.component.html',
    styleUrls: ['doubleRightIcon.component.css'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DoubleRightIconSAComponent implements OnDestroy
{
    //######################### protected fields #########################

    /**
     * Indication that component was destroyed
     */
    protected destroyed: boolean = false;

    /**
     * Timeout that is created
     */
    protected timeout: number|null = null;

    //######################### protected properties - template bindings #########################

    /**
     * Indication whether is icon animated
     */
    protected animating: boolean = false;

    //######################### constructor #########################
    constructor(protected changeDetector: ChangeDetectorRef)
    {
    }

    //######################### public methods - implementation of OnDestroy #########################
    
    /**
     * Called when component is destroyed
     */
    public ngOnDestroy()
    {
        this.destroyed = true;

        if(isPresent(this.timeout))
        {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
    }

    //######################### public methods - host #########################

    /**
     * Handles mouse up and animates icon
     */
    @HostListener('mouseup')
    public clickAndAnimate()
    {
        if(this.destroyed)
        {
            return;
        }

        this.animating = true;

        this.timeout = setTimeout(() =>
        {
            this.timeout = null;

            if(!this.destroyed)
            {
                this.animating = false;
                this.changeDetector.detectChanges();
            }
        }, 1400) as unknown as number;
    }
}