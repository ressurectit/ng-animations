[![npm version](https://badge.fury.io/js/%40anglr%2Fanimations.svg)](https://badge.fury.io/js/%40anglr%2Fanimations)
[![Build status](https://ci.appveyor.com/api/projects/status/6v3560ee6yo3lj6l?svg=true)](https://ci.appveyor.com/project/kukjevov/ng-animations)

# @anglr/animations

Angular library providing ready-to-use animated components and animation directives. It includes animated icon components with CSS-based animations and a directive for enabling enter/leave animations on dynamically created components.

## Installation

```bash
npm install @anglr/animations
```

### Peer Dependencies

- `@angular/core` >= 20.2.0
- `@jscrpt/common` >= 7.1.0
- `tslib` ^2.8.1

## Features

- **Animated icon components** – standalone components with pure CSS animations
- **AnimateDirective** – declarative enter/leave animations for dynamically created elements
- **Standalone** – all components and directives are standalone, no module import needed
- **OnPush** – all components use `ChangeDetectionStrategy.OnPush`

## Usage

### AnimateDirective

Directive used for enabling enter/leave animations on elements (best suited for dynamically created components).

```typescript
import {AnimateDirective} from '@anglr/animations';

@Component(
{
    imports: [AnimateDirective],
    template: `
        <div animate
             [enterAnimation]="'fadeIn'"
             [leaveAnimation]="'fadeOut'">
            Content with enter/leave animations
        </div>
    `,
})
export class MyComponent {}
```

#### Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `enterAnimation` | `string \| string[]` | `[]` | Name or names of animations used when the element enters |
| `leaveAnimation` | `string \| string[]` | `[]` | Name or names of animations used when the element leaves |

You can pass multiple animation names as an array:

```html
<div animate
     [enterAnimation]="['fadeIn', 'slideDown']"
     [leaveAnimation]="['fadeOut', 'slideUp']">
</div>
```

---

### DoubleRightIconSAComponent

An animated double-right chevron icon. Plays a sliding animation on click (`mouseup`).

```typescript
import {DoubleRightIconSAComponent} from '@anglr/animations';

@Component(
{
    imports: [DoubleRightIconSAComponent],
    template: `
        <span class="double-right-icon"></span>
    `,
})
export class MyComponent {}
```

The icon size scales with `font-size` (uses `em` units). Customize it via CSS:

```css
.double-right-icon 
{
    font-size: 24px;
    color: #333;
}
```

---

### UpDownCaretIconComponent

An animated caret (chevron) icon that toggles between up and down states with a 3D rotation transition.

```typescript
import {UpDownCaretIconComponent} from '@anglr/animations';

@Component(
{
    imports: [UpDownCaretIconComponent],
    template: `
        <span class="up-down-caret-icon" [(closed)]="isClosed"></span>
    `,
})
export class MyComponent 
{
    protected isClosed = true;
}
```

#### Model

| Model | Type | Default | Description |
|-------|------|---------|-------------|
| `closed` | `boolean` | `true` | Whether the caret is in the closed (down) state. Toggles on click. |

Styling example:

```css
.up-down-caret-icon {
    font-size: 16px;
    color: #666;
    cursor: pointer;
}
```

## Building

```bash
npm run build
```

## Linting

```bash
npm run lint
```

## License

[MIT](LICENSE)
