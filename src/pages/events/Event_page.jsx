import React from 'react'
import AppLayout_HOC from '../../components/layout/AppLayout_HOC'
import UpcomingEvent_comp from '../../components/pages/Events/UpcomingEvent_comp'
import EventModal from '../../components/modal/EventModal'

function Event_page() {
    return (
        <AppLayout_HOC>
            <div className='h-full'>
                <UpcomingEvent_comp />
                <EventModal />
            </div>
        </AppLayout_HOC>
    )
}

export default Event_page