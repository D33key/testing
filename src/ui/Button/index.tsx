import cl from "./Button.module.css";

interface Button {
    handleOnClick: () => void;
    children: React.ReactNode;
    activeButton?: string;
}

const CustomButton = ({ children, handleOnClick, activeButton }: Button) => {
    return (
        <button
            className={`${cl.chartSwitcher} ${
                children === activeButton ? `${cl.active}` : ""
            }`}
            onClick={() => {
                handleOnClick();
            }}
        >
            {children}
        </button>
    );
};

export default CustomButton;
