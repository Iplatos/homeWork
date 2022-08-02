import React, {DetailedHTMLProps, InputHTMLAttributes, HTMLAttributes, useState} from 'react'
import SuperInputText from '../../../h4/common/c1-SuperInputText/SuperInputText'
import s from './EditableSpan.module.css'

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperEditableSpanType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string

    spanProps?: DefaultSpanPropsType // пропсы для спана
}

const SuperEditableSpan: React.FC<SuperEditableSpanType> = (
    {
        autoFocus, // игнорировать изменение этого пропса
        onBlur,
        onEnter,
        spanProps,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const {children, onDoubleClick, className, ...restSpanProps} = spanProps || {}

    const onEnterCallback = () => {
        setEditMode(!editMode) // выключить editMode при нажатии Enter

        onEnter && onEnter()
    }
    const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
        setEditMode(!editMode) // выключить editMode при нажатии за пределами инпута

        onBlur && onBlur(e)
    }
    const onDoubleClickCallBack = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        setEditMode(!editMode) // включить editMode при двойном клике

        onDoubleClick && onDoubleClick(e)
    }

    const spanClassName = s.Span

    return (
        <>
            {editMode
                ? (
                    <SuperInputText
                        autoFocus // пропсу с булевым значением не обязательно указывать true
                        onBlur={onBlurCallback}
                        onEnter={onEnterCallback}

                        {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
                    />

                ) : (

                <span
                        onDoubleClick={onDoubleClickCallBack}
                        className={spanClassName}

                        {...restSpanProps}
                    > <img className={s.imageClass} src={"data:image/jpeg;base64,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" }/>
                        {/*если нет захардкодженного текста для спана, то значение инпута*/}
                        {children || restProps.value}
                    </span>
                )
            }
</>
    )
}

export default SuperEditableSpan
