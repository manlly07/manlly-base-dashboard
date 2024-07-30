import React from 'react'
import StyledTable from './styles'
import { DASHBOARD_COLUMN_DEFS } from '../../constants/columnDefs'
import Empty from '../../components/Empty'
import Search from '../../ui/Search'
import dashboard from '../../db/Dashboad'

const DashboardTable = () => {
  return (
    <>
      <div className='flex gap-4 md:justify-between md:items-center flex-col-reverse md:flex-row mb-5 mt-4 '>
        <p>
            View products: 
        </p>
        <div className="md:min-w-[280px]">
            <Search />
        </div>
      </div>
      <div>
        <StyledTable
            columns={DASHBOARD_COLUMN_DEFS}
            pagination={false}
            dataSource={dashboard}
            locale={{
              emptyText: <Empty text="No items found"/>
            }}
            rowKey={record => record.orderNumber}
        />
      </div>
    </>
  )
}

export default DashboardTable