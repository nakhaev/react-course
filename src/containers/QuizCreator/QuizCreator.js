import React, { useState } from 'react';
import classes from './QuizCreator.module.css';
import Button from '../../components/UI/Button/Button';
import {createControl, validate, validateForm} from '../../form/formFramework';
import Input from '../../components/UI/Input/Input';
import Select from '../../components/UI/Select/Select';

function createOptionControl(number) {
    const config = {
        label: `Variant ${number}`,
        errorMessage: 'The value could not be empty',
        id: number
    }
    return createControl(config, {required: true})
}

function createFormControls() {
    return {
        question: createControl({
            label: 'Enter question',
            errorMessage: 'The question could not be empty'}, {required: true}),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4),
    };
}

const QuizCreator = props => {
    const [quiz, setQuiz] = useState([]);
    const [isFormValid, setIsFormValid] = useState(false);
    const [rightAnswerId, setRightAnswerId] = useState("1");
    const [formControls, setFormControls] = useState(createFormControls());
    const submitHandler = (e) => {
        e.preventDefault();
    }
    const addQuestionHandler = event => {
        event.preventDefault();
        const q = [ ...quiz];
        const index = q.length + 1;
        const {question, option1, option2, option3, option4} = formControls;

        const questionItem = {
            question: question.value,
            id: index,
            rightAnswerId: rightAnswerId,
            answers: [
                {text: option1.value, id: option1.id},
                {text: option2.value, id: option2.id},
                {text: option3.value, id: option3.id},
                {text: option4.value, id: option4.id},
            ]
        };

        q.push(questionItem);
        setQuiz(q);
        setFormControls(createFormControls());
        setIsFormValid(false);
    }

    const createQuizHandler = event => {
        event.preventDefault();
        console.log('quiz', quiz);
    }
    const onChangeHandler = (value, controlName) => {
        const controls = { ...formControls};
        const control = { ...controls[controlName]};

        control.touchad = true;
        control.value = value;
        control.valid  = validate(control.value, control.validation);
        controls[controlName] = control;

        setFormControls(controls);
        setIsFormValid(validateForm(controls));
    }
    const selectChangeHandler = event => {
        setRightAnswerId(event.target.value);
    }
    function renderControls() {
        return Object.keys(formControls).map((key, index) => {
            let control = formControls[key];
            return( <React.Fragment key={key+index}>
                        <Input
                        type={control.type}
                        label={control.label}
                        value={control.value}
                        valid={control.valid}
                        touched={control.touched}
                        errorMessage={control.errorMessage}
                        shouldValidate={!!control.validation}
                        onChange={(event) => onChangeHandler(event.target.value, key)}
                    />
                    { index === 0 ? <hr/> : null}
                </React.Fragment>
            )
        })
    }

    return (
        <div className={classes.QuizCreator}>
            <div>
                <h1>Add Quiz</h1>
                <form onSubmit={submitHandler}>
                    { renderControls() }

                    <Select
                        label='Choose the right answer please'
                        value={rightAnswerId}
                        onChange={selectChangeHandler}
                        options={[
                            {text: 1, value: 1},
                            {text: 2, value: 2},
                            {text: 3, value: 3},
                            {text: 4, value: 4},
                        ]}
                    />
                    <Button
                        type="primary"
                        onClick={addQuestionHandler}
                        disabled={!isFormValid}
                    >
                        Add question
                    </Button>
                    <Button
                        type="success"
                        onClick={createQuizHandler}
                        disabled={quiz.length === 0}
                    >
                        Create Quiz
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default QuizCreator;
