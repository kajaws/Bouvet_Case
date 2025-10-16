import type {Question} from "../../types/types.ts";
import {Fieldset, Radio} from "@digdir/designsystemet-react";

type Props = {
    question: Question
    selectedChoiceId?: number
    onSelect: (choiceId: number) => void
}

export function QuestionGroup({ question, selectedChoiceId, onSelect }: Props) {
    return (
        <Fieldset className='quiz-fieldset'>
            <Fieldset.Legend className="quiz-legend">
                {question.text}
            </Fieldset.Legend>

            {question.choices.map((choice) => (
                <Radio
                    key={choice.id}
                    name={`question-${question.id}`}
                    value={choice.id.toString()}
                    label={choice.text}
                    checked={selectedChoiceId === choice.id}
                    onChange={() => onSelect(choice.id)}
                    className="quiz-radio"
                />
            ))}
        </Fieldset>
    )
}