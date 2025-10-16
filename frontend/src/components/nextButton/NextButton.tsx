import {Button} from "@digdir/designsystemet-react";

type Props = {
    index: number
    total: number
    canProceed: boolean
    isLast: boolean
    isSubmitting: boolean
    onClick: () => void
}

export function NextButton({index, total, canProceed, isLast, isSubmitting, onClick}: Props) {
    return (
        <div className="nextbar-container">
            <span className="nextbar-progress">
                Spørsmål {index + 1} / {total}
            </span>
            <Button onClick={onClick} disabled={!canProceed || isSubmitting}>
                {isLast ? (isSubmitting ? "Sender..." : "Send inn") : "Neste"}
            </Button>
        </div>
    )
}