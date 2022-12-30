import React from "react";
import { FC } from "react";

export interface ProductOptionsProps extends React.HTMLProps<HTMLDivElement> {
  name: any;
  values: any;
  selectedOptions: any;
  setOptions: any;
}

const ProductOptions: FC<ProductOptionsProps> = ({
  name,
  values,
  selectedOptions,
  setOptions,
}) => {
  return (
    <fieldset>
      <legend className="text-xl font-semibold">{name}</legend>
      <div className="inline-flex flex-wrap items-center">
        {values.map((value: any) => {
          const id = `option-${name}-${value}`;
          const checked = selectedOptions[name] === value;

          return (
            <label htmlFor={id} key={id}>
              <input
                className="sr-only"
                type="radio"
                id={id}
                name={`options-${name}`}
                value={value}
                checked={checked}
                onChange={() => {
                  setOptions(name, value);
                }}
              />
              <div
                className={`my-3 mr-3 block cursor-pointer rounded-full p-2 text-lg
                ${
                  checked
                    ? "bg-gray-900 text-white dark:border-2 dark:border-indigo-400 dark:bg-gray-200 dark:text-gray-900"
                    : "bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-white"
                }`}
              >
                <span className="px-2">{value}</span>
              </div>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
};

export default ProductOptions;
