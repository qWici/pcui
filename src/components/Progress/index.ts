import Element from '../Element/index';
import Container, { ContainerArgs } from '../Container';

const CLASS_ROOT = 'pcui-progress';
const CLASS_INNER = CLASS_ROOT + '-inner';

export interface ProgressArgs extends ContainerArgs {
    /**
     * Gets / sets the value of the progress bar (between 0 and 100).
     */
    value?: number
}

/**
 * Represents a bar that can highlight progress of an activity.
 */
class Progress extends Container {
    static readonly defaultArgs: ProgressArgs = {
        ...Container.defaultArgs
    };

    protected _inner: Element;

    protected _value: number;

    constructor(args: ProgressArgs = Progress.defaultArgs) {
        args = { ...Progress.defaultArgs, ...args };
        super(args);
        this.class.add(CLASS_ROOT);

        this._inner = new Element(document.createElement('div'));
        this.append(this._inner);
        this._inner.class.add(CLASS_INNER);

        if (args.value !== undefined) {
            this.value = args.value;
        }
    }

    /**
     * Gets / sets the value of the progress bar (between 0 and 100).
     */
    set value(val) {
        if (this._value === val) return;

        this._value = val;
        this._inner.width = `${this._value}%`;
        this.emit('change', val);
    }

    get value() {
        return this._value;
    }
}

Element.register('progress', Progress);

export default Progress;
