import * as React from 'react';
import { IMember } from '@app/interfaces/app';

interface IMemberProps {
    member: IMember;
}

export function Member(props: IMemberProps) {
    const { member } = props;
    return (
        <div className="member p-2">
            <div className="rounded position-relative">
                <img src={member.photoUrl} alt={member.name} />
                <div className="member-description position-absolute w-100">
                    <div className="text-white text-center font-weight-bold">{member.name}</div>
                    <div className="text-primary text-center font-weight-bold">{member.position}</div>
                </div>
            </div>
        </div>
    );
}
