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
      <div className="inline-flex items-center flex-wrap">
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
                className={`p-2 my-3 text-lg rounded-full block cursor-pointer mr-3
                ${
                  checked
                    ? "text-white bg-gray-900 dark:text-gray-900 dark:bg-gray-200 dark:border-2 dark:border-indigo-400"
                    : "text-gray-900 bg-gray-200 dark:text-white dark:bg-gray-900"
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
