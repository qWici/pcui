import Element from '../Element/index';
import Container, { ContainerArgs } from '../Container';
import Label from '../Label';

const CLASS_LABEL_GROUP = 'pcui-label-group';
const CLASS_LABEL_TOP = CLASS_LABEL_GROUP + '-align-top';

export interface LabelGroupArgs extends ContainerArgs {
    /**
     * The label text.
     */
    text?: string;
    /**
     * The element to be wrapped by the label group.
     */
    field?: Element;
    /**
     * Whether to align the label at the top of the group. Defaults to false which aligns it at the center.
     */
    labelAlignTop?: boolean;
    /**
     * Add a native tooltip to the label.
     */
    nativeTooltip?: boolean;
}

/**
 * Represents a group of a Label and a Element. Useful for rows of labeled fields.
 */
class LabelGroup extends Container {
    static readonly defaultArgs: LabelGroupArgs = {
        ...Container.defaultArgs,
        text: 'Label',
        field: null,
        labelAlignTop: false
    };

    protected _label: Label;

    protected _field: Element;

    constructor(args: LabelGroupArgs = LabelGroup.defaultArgs) {
        args = { ...LabelGroup.defaultArgs, ...args };
        super(args);

        this.class.add(CLASS_LABEL_GROUP);

        this._label = new Label({
            text: args.text,
            nativeTooltip: args.nativeTooltip
        });
        this.append(this._label);

        this._field = args.field;
        if (this._field) {
            this.append(this._field);
        }

        this.labelAlignTop = args.labelAlignTop;
    }

    /**
     * The label element.
     */
    get label() {
        return this._label;
    }

    /**
     * The field element.
     */
    get field() {
        return this._field;
    }

    /**
     * Sets / Gets the text of the label.
     */
    set text(value) {
        this._label.text = value;
    }

    get text() {
        return this._label.text;
    }

    /**
     * Sets / Gets whether to align the label at the top of the group. Defaults to false which aligns it at the center.
     */
    set labelAlignTop(value) {
        if (value) {
            this.class.add(CLASS_LABEL_TOP);
        } else {
            this.class.remove(CLASS_LABEL_TOP);
        }
    }

    get labelAlignTop() {
        return this.class.contains(CLASS_LABEL_TOP);
    }
}

Element.register('labelgroup', LabelGroup);

export default LabelGroup;
