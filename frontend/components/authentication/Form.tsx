// import * as React from 'react';
// import {TextInput} from 'react-native';
// import {ValidationOptions, FieldError} from 'react-hook-form';

// interface ValidationMap {
//   [key: string]: ValidationOptions;
// }

// interface ErrorMap {
//   [key: string]: FieldError | undefined;
// }

// interface Props {
//   children: JSX.Element | JSX.Element[];
//   register: ({name}: {name: string}, validation: ValidationOptions) => void;
//   errors: ErrorMap;
//   validation: ValidationMap;
//   setValue: (name: string, value: string, validate?: boolean) => void;
// }

// export default ({
//   register,
//   errors,
//   setValue,
//   validation,
//   children,
// }: Props) => {
//   const Inputs = React.useRef < Array < TextInput >> []

//   return (
//     <>
//       {(Array.isArray(children) ? [...children] : [children]).map(
//         (child, i) => {
//           return child.props.name
//             ? React.createElement(child.type, {
//                 ...{
//                   ...child.props,
//                   ref: (e: TextInput) => {
//                     register(
//                       { name: child.props.name },
//                       validation[child.props.name]
//                     )
//                     Inputs.current[i] = e
//                   },
//                   onChangeText: (v: string) =>
//                     setValue(child.props.name, v, true),
//                   onSubmitEditing: () => {
//                     Inputs.current[i + 1]
//                       ? Inputs.current[i + 1].focus()
//                       : Inputs.current[i].blur()
//                   },
//                   blurOnSubmit: false,
//                   key: child.props.name,
//                   error: errors[child.props.name],
//                 },
//               })
//             : child
//         }
//       )}
//     </>
//   )
// }
