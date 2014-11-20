{
	"num_processes": 8,
	"logger": {
		"prefix": "[leaps]",
		"log_level": "INFO",
		"add_timestamp": true
	},
	"stats": {
		"job_buffer": 100,
		"prefix": "leaps",
		"retain_internal": true
	},
	"curator": {
		"storage": {
			"type": "memory",
			"name": "",
			"store_directory": "",
			"sql": {
				"dsn": "",
				"db_table": {
					"table": "leaps_documents",
					"id_column": "ID",
					"content_column": "CONTENT"
				}
			}
		},
		"binder": {
			"flush_period_ms": 500,
			"retention_period_s": 60,
			"kick_period_ms": 5,
			"close_inactivity_period_s": 300,
			"transform_model": {
				"max_document_size": 50000000,
				"max_transform_length": 50000
			}
		},
		"authenticator": {
			"type": "none",
			"allow_creation": true,
			"redis_config": {
				"url": ":6379"
			}
		}
	},
	"http_server": {
		"static_path": "/leaps",
		"socket_path": "/leaps/socket",
		"address": "localhost:8080",
		"www_dir": "",
		"binder": {
			"bind_send_timeout_ms": 10
		}
	},
	"stats_server": {
		"static_path": "/",
		"stats_path": "/stats",
		"address": "localhost:4040",
		"www_dir": "",
		"stat_timeout_ms": 200,
		"request_timeout_s": 10
	}
}
