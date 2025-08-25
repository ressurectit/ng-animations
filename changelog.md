# Changelog

## Version 11.0.0 (2025-08-25)

### BREAKING CHANGES

- minimal supported version of `node.js` is `20`
- minimal supported version of `@angular` is `20.2.0`
- minimal supported version of `@jscrpt/common` is `7.1.0`
- minimal supported version of `tslib` is `2.8.1`
- removed dependency on *deprecated* `@angular/animations`, all animations were replaced with pure css animations placed inside `@css-styles/themes` version `2.1.0`
- removed `animateChildrenTrigger` animation trigger
- removed `fadeInOutTriggerFactory` and `fadeInOutTrigger` animation trigger, replaced with `.fade-in` and `.fade-out` css animation
- removed `flyInTriggerFactory` and `flyInTrigger` animation trigger, replaced with `.fly-in` css animation
- removed `flyInOutTriggerFactory` and `flyInOutTrigger` animation trigger, replaced with `.fly-in` and `.fly-out` css animation
- removed `flyOutTriggerFactory` and `flyOutTrigger` animation trigger, replaced with `.fly-out` css animation
- removed `slideInOutTriggerFactory` and `slideInOutTrigger` animation trigger, replaced with `.slide-in` and `.slide-out` css animation
- removed `visibleFlyInOutTriggerFactory` and `visibleFlyInOutTrigger` animation trigger
- removed `VISIBLE` constant
- removed `animateChildrenAnimation` animation
- removed `FadeInParams` type
- removed `fadeInAnimation` animation
- removed `FadeOutParams` type
- removed `fadeOutAnimation` animation
- removed `FlyInParams` type
- removed `flyInAnimation` animation
- removed `FlyOutParams` type
- removed `flyOutAnimation` animation
- removed `SlideInParams` type
- removed `slideInAnimation` animation
- removed `SlideOutParams` type
- removed `slideOutAnimation` animation

## Version 10.1.0 (2024-05-15)

### Features

- new `UpDownCaretIconComponent` component, that is animated up down caret icon component
    - is `standalone`

## Version 10.0.0 (2023-11-09)

### Features

- new `DoubleRightIconSAComponent` component, that is animated double right icon component

### BREAKING CHANGES

- minimal supported version of `node.js` is `18`
- minimal supported version of `@angular` is `17.0.0`
- minimal supported version of `tslib` is `2.6.2`

## Version 9.1.0 (2022-04-19)

### Features

- new `animateChildrenAnimation` animation, that animates children animations
- new `animateChildrenTrigger` trigger, that animates children

## Version 9.0.1 (2022-02-22)

### Bug Fixes

- fixed typings, not using rolled up typings for now

## Version 9.0.0 (2021-12-16)

### BREAKING CHANGES

- minimal supported version of *Angular* is `13.1.0`
- new dependency `@jscrpt/common` version `2.1.0`
- removed `CssOverflow`, `CssPosition`, `CssDisplay`, now using ones from `@jscrpt/common`

## Version 8.0.2 (2021-11-11)

### Bug Fixes

- fixed order of exports, es2020 first

## Version 8.0.1 (2021-11-11)

### Bug Fixes

- fixed paths to exports

## Version 8.0.0 (2021-11-11)

### Bug Fixes

- fixed `slideInAnimation`, `slideOutAnimation` animations, now correctly animates height and does not change `display`, with this fixed also `slideInOutTrigger`

### BREAKING CHANGES

- minimal supported version of *Angular* is `13.0.0`
- compiled as *Angular IVY* **only** with new *APF*
- removed support of *es5* target and using latest package.json features
- dropped support of `Node.js <= 12.20`
- added strict compilation

## Version 7.1.0 (2021-06-10)

### Features

- added new `LocalNotificationsProviderDirective` used for providing `LocalNotificationsService` to local `NotificationsComponent`

## Version 7.0.0

- updated to latest stable *Angular* 9
- added generating of API doc

## Version 6.0.0

- Angular IVY ready (APF compliant package)
- added support for ES2015 compilation
- Angular 8

## Version 5.0.0
 - `@anglr/animations` is now marked as *sideEffects* free
 - stabilized for angular v6

## Version 5.0.0-beta.1
 - aktualizácia balíčkov `Angular` na `6`
 - aktualizácia `Webpack` na verziu `4`
 - aktualizácia `rxjs` na verziu `6`
 - automatické generovanie dokumentácie

## Version 4.0.2
 - returned typescript version back to 2.4.2 and removed distJit

## Version 4.0.1
 - added compiled outputs for Angular JIT

## Version 4.0.0
 - updated angular to 5.0.0 (final)
 - changed dependencies of project to peerDependencies
 - more strict compilation

## Version 4.0.0-beta.0
 - updated angular to >=5.0.0-rc.7