import * as React from 'react';
import { IMember } from '@app/interfaces/app';
import { connect } from 'react-redux';
import { IStore } from '@app/store';
import { actions } from '@app/reducers/team-screen';

interface IMemberProps {
    member: IMember;
    [field: string]: any
}

export const Member = connect((state: IStore) => state.teamReducer)((props: IMemberProps) => {
    const { member } = props;
    return (
        <div className="member p-2">
            <div className="rounded position-relative"
                onMouseEnter={() => props.dispatch(actions.setActiveMember(member))}
                onMouseLeave={() => props.dispatch(actions.setActiveMember(null))}>
                <img src={member.photoUrl} alt={member.name} />
                <div className="member-description position-absolute w-100">
                    <div className="text-white text-center font-weight-bold">{member.name}</div>
                    <div className="text-primary text-center font-weight-bold">{member.position}</div>
                </div>
            </div>
        </div>
    );
});
