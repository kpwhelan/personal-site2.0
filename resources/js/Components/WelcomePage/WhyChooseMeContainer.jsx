import 'animate.css';

export default function WhyChooseMeContainer({ className, children }) {
    return (
        <div className={className + ' animate__animated animate__slideInRight'}>
            {children}
        </div>
    )
}
