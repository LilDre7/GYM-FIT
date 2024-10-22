import SectionWrapper from './SectionWrapper'
import ExerciseCard from './ExerciseCard'

import PropTypes from 'prop-types';

Workout.propTypes = {
  workout: PropTypes.array.isRequired,
};


export default function Workout(props) {
    const { workout } = props
    return (
        <SectionWrapper id={'workout'} header={"welcome to"} title={['The', 'DANGER', 'zone']}>
            <div className='flex flex-col gap-4'>
                {workout.map((exercise, i) => {
                    return (
                        <ExerciseCard i={i} exercise={exercise} key={i} />
                    )
                })}
            </div>
        </SectionWrapper>
    )
}