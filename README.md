            airtable.post('/currentData', {
                "records": [
                    {
                        "fields": {
                            "data": "test Data"
                        }
                    }
                ]
            })