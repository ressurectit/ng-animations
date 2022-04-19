import {animateChild, animation, AnimationReferenceMetadata, query} from '@angular/animations';

/**
 * Animates children animations
 */
export const animateChildrenAnimation: AnimationReferenceMetadata = animation(
[
    query('@*', animateChild(), {optional: true})
]);
