# Changelog

## Version 10.0.0 (2023-11-03)

### BREAKING CHANGES
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