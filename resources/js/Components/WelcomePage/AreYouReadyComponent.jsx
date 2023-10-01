import PrimaryButton from "../PrimaryButton"

export default function AreYouReadyComponent() {
    return (
        <div className="text-center pb-2 md:pb-0">
            <p className="text-4xl capitalize">Ready to see your ideas come to life?</p>
            <p className="mt-6 text-xl">I can't wait to hear from you - <span><PrimaryButton className='bg-my-sage mt-2'>
                    <p className='text-2xl'>Make Magic Happen</p>
                </PrimaryButton></span></p>
        </div>
    )
}
